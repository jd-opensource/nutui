import { DOMWrapper, mount } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import { Form, FormItem, Button, Textarea, Switch, Checkbox, Rate, InputNumber, Range, Uploader, FormInstance } from '@nutui/nutui'

test('base Form', () => {
  const wrapper = mount(() => {
    return <Form />
  })
  const form = wrapper.find('.nut-form')
  expect(form.exists()).toBe(true)
})

test('base Form usage', async () => {
  const wrapper = mount(() => {
    return (
      <Form>
        <FormItem label="姓名">
          <input placeholder="请输入姓名" type="text" />
        </FormItem>
        <FormItem label="年龄">
          <input placeholder="请输入年龄" type="text" />
        </FormItem>
        <FormItem label="联系电话">
          <input placeholder="请输入联系电话" type="text" />
        </FormItem>
        <FormItem label="地址">
          <input placeholder="请输入地址" type="text" />
        </FormItem>
        <FormItem label="备注">
          <Textarea placeholder="请输入备注" />
        </FormItem>
      </Form>
    )
  })
  await nextTick()
  const form = wrapper.find('.nut-cell-group__wrap')
  expect(form.exists()).toBe(true)
  const formItems = wrapper.findAll('.nut-form-item')
  expect(formItems.length).toBe(5)
})

test('base Dynamic Form', async () => {
  const val = ref({
    name: '',
    tels: new Array({
      key: 1,
      value: ''
    })
  })
  const formRef = ref<FormInstance>()
  const submit = () => {
    formRef.value!.validate().then(({ valid }) => {
      if (valid) {
        // console.log('success', dynamicForm);
      } else {
        // console.log('error submit!!', errors);
      }
    })
  }
  const reset = () => {
    formRef.value!.reset()
  }
  const remove = () => {
    val.value.tels.pop()
  }
  const add = () => {
    val.value.tels.push({
      key: Date.now(),
      value: ''
    })
  }
  const wrapper = mount(() => {
    return (
      <Form modelValue={val.value} ref={formRef}>
        <FormItem
          label="姓名"
          showErrorMessage={false}
          showErrorLine={false}
          errorMessageAlign="center"
          bodyAlign="center"
          labelWidth="90px"
          prop="name"
          required
          rules={[{ required: true, message: '请填写姓名' }]}
        >
          <input v-model={val.value.name} placeholder="请输入姓名" type="text" />
        </FormItem>
        {val.value.tels.map((item, index) => {
          return (
            <FormItem
              label={'联系方式' + index}
              prop={'tels.' + index + '.value'}
              required
              rules={[{ required: true, message: '请填写联系方式' + index }]}
              key={item.key}
            >
              <input v-model={item.value} placeholder={'请输入联系方式' + index} type="text" />
            </FormItem>
          )
        })}
        <Button class="add" onClick={add} />
        <Button class="remove" onClick={remove} />
        <Button class="submit" onClick={submit} />
        <Button class="reset" onClick={reset} />
      </Form>
    )
  })
  await nextTick()
  let formItems = wrapper.findAll('.nut-form-item')
  expect(formItems.length).toBe(2)

  const form1 = wrapper.find('.nut-cell__title')
  expect(form1.classes()).toContain('required')
  expect((form1.element as HTMLElement).style.textAlign).toEqual('')
  expect((form1.element as HTMLElement).style.width).toEqual('90px')

  const form2 = wrapper.find('.nut-form-item__body__slots')
  expect((form2.element as HTMLElement).style.textAlign).toEqual('center')

  const submitBtn = wrapper.find('.submit')
  submitBtn.trigger('click')

  await nextTick()
  const form3 = wrapper.find('.nut-form-item__body__tips')
  expect(form3.exists()).toBe(true)
  const form5 = wrapper.find('.nut-form-item.error.line::before')
  expect(form5.exists()).toBe(false)

  const addBtn = wrapper.find('.add')
  addBtn.trigger('click')
  await nextTick()
  formItems = wrapper.findAll('.nut-form-item')
  expect(formItems.length).toBe(3)

  const removeBtn = wrapper.find('.remove')
  removeBtn.trigger('click')
  await nextTick()
  formItems = wrapper.findAll('.nut-form-item')
  expect(formItems.length).toBe(2)

  const resetBtn = wrapper.find('.reset')
  resetBtn.trigger('click')
  await nextTick()
  const form9 = wrapper.find('.nut-form-item__body__tips')
  expect(form9.exists()).toBe(false)
})

test('base Form verification', async () => {
  const formData = ref({
    name: '1234'
  })
  const formRef = ref()
  const submit = () => {
    formRef.value.validate().then(({ valid }: any) => {
      if (valid) {
        // console.log('success', formData);
      } else {
        // console.log('error submit!!!', errors);
      }
    })
  }
  const reset = () => {
    formRef.value.reset()
  }
  const customValidator = (val: string) => {
    if (/^\d+$/.test(val)) {
      return Promise.resolve()
    } else {
      return Promise.reject('必须输入数字')
    }
  }
  const customRulePropValidator = (val: string, rule: any) => {
    if (rule.reg.test(val)) {
      return Promise.resolve()
    } else {
      return Promise.reject('必须输入数字')
    }
  }
  const wrapper = mount(() => {
    return (
      <Form modelValue={formData.value} ref={formRef} rules={{ name: [{ required: true, message: '请填写姓名' }] }}>
        <FormItem
          label="姓名"
          prop="name"
          rules={[
            { required: true, message: '请填写年龄' },
            { validator: customValidator, message: '必须输入数字' },
            { validator: customRulePropValidator, message: '必须输入数字', reg: /^\d+$/ },
            { regex: /^(\d{1,2}|1\d{2}|200)$/, message: '必须输入0-200区间' }
          ]}
        >
          <input v-model={formData.value.name} placeholder="请输入姓名，blur 事件校验" type="text" />
        </FormItem>
        <Button class="submit" onClick={submit} />
        <Button class="reset" onClick={reset} />
      </Form>
    )
  })

  const form1 = wrapper.find('.nut-cell__title')
  expect(form1.classes()).toContain('required')
  const formItem2: DOMWrapper<Element> = wrapper.find('.nut-form-item__body__tips')

  const submitBtn = wrapper.find('.submit')
  submitBtn.trigger('click')
  await nextTick()
  expect(submitBtn.exists()).toBe(true)

  const resetBtn = wrapper.find('.reset')
  resetBtn.trigger('click')
  expect(formItem2.exists()).toBe(false)
})

test('base Form Type', async () => {
  const formData = ref({
    switch: false,
    checkbox: false,
    radio: 0,
    number: 0,
    rate: 3,
    range: 30,
    defaultFileList: [
      {
        name: '文件1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: '上传成功',
        type: 'image'
      },
      {
        name: '文件2.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'uploading',
        message: '上传中...',
        type: 'image'
      }
    ]
  })
  const wrapper = mount(() => {
    return (
      <Form>
        <FormItem label="开关">
          <Switch v-model={formData.value.switch}></Switch>
        </FormItem>
        <FormItem label="复选框">
          <Checkbox v-model={formData.value.checkbox}>复选框</Checkbox>
        </FormItem>
        <FormItem label="评分">
          <Rate v-model={formData.value.rate} />
        </FormItem>
        <FormItem label="步进器">
          <InputNumber v-model={formData.value.number} />
        </FormItem>
        <FormItem label="滑块">
          <Range v-model={formData.value.range}></Range>
        </FormItem>
        <FormItem label="文件上传">
          <Uploader url="http://服务地址" v-model:file-list={formData.value.defaultFileList} maximum={3} multiple />
        </FormItem>
      </Form>
    )
  })
  await nextTick()
  const formItem = wrapper.findAll('.nut-form-item')
  expect(formItem.length).toBe(6)
  const formItem1 = wrapper.find('.nut-switch')
  expect(formItem1.exists()).toBe(true)
  const formItem2 = wrapper.find('.nut-checkbox')
  expect(formItem2.exists()).toBe(true)
  const formItem3 = wrapper.find('.nut-rate')
  expect(formItem3.exists()).toBe(true)
  const formItem4 = wrapper.find('.nut-input-number')
  expect(formItem4.exists()).toBe(true)
  const formItem5 = wrapper.find('.nut-range')
  expect(formItem5.exists()).toBe(true)
  const formItem6 = wrapper.find('.nut-uploader')
  expect(formItem6.exists()).toBe(true)
})
