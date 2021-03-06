import React from 'react';
import { useTextInput } from '../../../hooks';
import { createClassName } from '../../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type PasswordInputProps = {
  readonly showPassword: boolean;
  readonly isInputInvalid: boolean;
  readonly toggleShowPassword: () => void;
  readonly textInput: ReturnType<typeof useTextInput>;
};

const PasswordInput = React.memo<PasswordInputProps>(
  ({ textInput, showPassword, isInputInvalid, toggleShowPassword }) => {
    const { hasValue, bindToInput } = textInput;

    const className = createClassName([
      'input',
      'is-medium',
      (isInputInvalid && !hasValue) && 'is-danger',
    ]);

    return (
      <div className='field'>
        <div className='control has-icons-left has-icons-right'>
          <input
            {...bindToInput}
            className={className}
            placeholder='Password'
          />
          <span className='icon is-left'>
            <FontAwesomeIcon icon='lock' />
          </span>
          <span
            onClick={toggleShowPassword}
            className='icon is-right icon-clickable'
            data-tooltip={!showPassword ? 'Show password' : 'Hide password'}
          >
            <FontAwesomeIcon icon={!showPassword ? 'eye' : 'eye-slash'} />
          </span>
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
