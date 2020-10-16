import React from 'react';
// import styles from './Input.module.css';
import Autocomplete from 'react-autocomplete';
// import Animations from '../Animations/Animations.module.css';

const autoCompleteStyle = {
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    fontSize: '1.5rem',
    overflow: 'auto',
    maxHeight: '50%',
    "zIndex": 100,
};

const Input = (props) => {

    return (
        <Autocomplete
            items={[
                { id: 'userPIN', label: props.savedUserPIN }
            ]}
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}

            inputProps={{ placeholder: '#PIN' }}
            // wrapperStyle={{ width: '24rem' }}

            menuStyle={autoCompleteStyle}
            renderItem={(item, highlighted) =>
                <div
                    key={item.id}
                    style={{ backgroundColor: highlighted ? '#eee' : 'transparent', cursor: 'pointer' }}
                >
                    {item.label}
                </div>
            }
            value={props.inputValue}
            onChange={props.onChangeHandler}
            onSelect={(value) => props.onSelectHandler(value)}
        />

    );

};



export default Input;