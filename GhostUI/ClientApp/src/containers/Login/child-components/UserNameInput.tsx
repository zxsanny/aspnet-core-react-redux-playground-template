import React from 'react';
import { useTextInput } from '../../../hooks';
import { createClassName } from '../../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type UserNameInputProps = {
  readonly isInputInvalid: boolean;
  readonly textInput: ReturnType<typeof useTextInput>;
};

const UserNameInput = React.memo<UserNameInputProps>(
  ({ textInput, isInputInvalid }) => {
    const { hasValue, bindToInput } = textInput;

    const className = createClassName([
      'input',
      'is-medium',
      (isInputInvalid && !hasValue) && 'is-danger',
    ]);

    return (
      <div className='field'>
        <div className='control has-icons-left'>
          <input
            autoFocus
            {...bindToInput}
            className={className}
            placeholder='Username'
          />
          <span className='icon is-left'>
            <FontAwesomeIcon icon='user' />
          </span>
        </div>
      </div>
    );
  }
);

UserNameInput.displayName = 'UserNameInput';

export default UserNameInput;
