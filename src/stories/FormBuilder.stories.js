import React, { useState } from 'react';

import { ReactFormBuilder } from '../index';

export default {
  title: 'FormBuilder/ReactFormBuilder',
  component: ReactFormBuilder,
};

export const Builder = () => {
  let [json, setJson] = useState([]);
  const onPost = ({task_data}) => setJson([...task_data]);
  return <>
    <ReactFormBuilder onPost={onPost} />
    <br />
    <span>{JSON.stringify(json)}</span>
  </>;
}
