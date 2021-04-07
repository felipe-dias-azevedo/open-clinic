import { useState } from 'react';
import { Icon } from '@iconify/react';
import eyeInvisibleOutlined from '@iconify-icons/ant-design/eye-invisible-outlined';
import eyeOutlined from '@iconify-icons/ant-design/eye-outlined';
import '../styles/inputLabelPassword.css';

export default function InputLabel({ isDark, hasSublabel }) {
  const [visible, setVisible] = useState(false);
  
  return (
    <div className="input-label-pwd">
      <section>
        <h3>Password:</h3>
        {hasSublabel && <p>Five Letter Minimum</p>}
      </section>
      <div
        className={isDark ? "dark-input-pwd" : "light-input-pwd"}
      >
        <input
          type={visible ? "text" : "password"}
          placeholder={`Type your Password`}
        />
        <button onClick={() => {setVisible(!visible)}}>
          { visible
            ? (<Icon className="eyePassword" icon={eyeOutlined} />)
            : (<Icon className="eyePassword" icon={eyeInvisibleOutlined} />)
          }
        </button>
      </div>
    </div>
  );
}