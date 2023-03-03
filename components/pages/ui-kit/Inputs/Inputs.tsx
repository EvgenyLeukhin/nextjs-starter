import { Checkbox, Input, RadioGroup, Select, File } from '@/components/forms';
import { InputList } from '@/types/common';
import styles from './Inputs.module.scss';

const Inputs = () => {
  return (
    <section className={styles.Inputs}>
      <h2>Inputs</h2>

      {/* text */}
      <Input
        id='test-text'
        name='test-text'
        type={InputList.text}
        placeholder='Enter text'
        label='Text'
      />

      {/* number */}
      <Input
        id='test-number'
        name='test-number'
        type={InputList.number}
        placeholder='Enter number'
        label='Number'
      />

      {/* email */}
      <Input
        id='test-email'
        name='test-email'
        type={InputList.email}
        placeholder='Enter email'
        label='Email'
      />

      {/* search */}
      <Input
        id='test-search'
        name='test-search'
        type={InputList.search}
        placeholder='Search something'
        label='Search'
      />

      {/* url */}
      <Input
        id='test-url'
        name='test-url'
        type={InputList.url}
        placeholder='Enter url'
        label='Url'
      />

      {/* password */}
      <Input
        id='test-password'
        name='test-password'
        type={InputList.password}
        placeholder='Enter password'
        label='Password'
      />

      {/* phone */}
      <Input
        id='test-phone'
        name='test-phone'
        type={InputList.tel}
        placeholder='Enter phone'
        label='Phone'
      />

      {/* select */}
      <Select
        id='test-contry'
        name='test-contry'
        label='Select'
        placeholder='Choose contry'
        options={[
          { value: 'ru', label: 'Russia' },
          { value: 'be', label: 'Belarus' },
          { value: 'kz', label: 'Kazahstan' },
          { value: 'am', label: 'Armenia' },
          { value: 'uz', label: 'Uzbekistan' },
          { value: 'tr', label: 'Turkey' },
          { value: 'ge', label: 'Georgia' },
        ]}
        value=''
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setFieldValue={(field, value, shouldValidate) => {
          return null;
        }}
      />

      <File
        label='File'
        id='test-file'
        name='test-file'
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setFieldValue={function (field, value, shouldValidate): void {
          null;
        }}
      />

      {/* textarea */}
      <Input
        id='test-textarea'
        name='test-textarea'
        type={InputList.textarea}
        placeholder='Enter comment'
        label='Comment'
      />

      {/* checkbox */}
      <Checkbox
        id='test-agree'
        name='test-agree'
        label='Agree to post my data'
      />

      {/* radio */}
      <RadioGroup
        name='test-gender'
        values={['male', 'female', 'other']}
        labels={['Man', 'Woman', 'Other']}
      />
    </section>
  );
};

export default Inputs;
