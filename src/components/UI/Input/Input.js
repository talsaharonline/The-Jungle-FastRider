import React from 'react';
import Autocomplete from 'react-autocomplete';

const autoCompleteStyle = {
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: '#ffffffe6',
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

            menuStyle={autoCompleteStyle}
            renderItem={(item, highlighted) =>
                <div
                    key={item.id}
                    style={{
                        backgroundColor: highlighted
                            ? '#eee'
                            : 'transparent', cursor: 'pointer'
                    }}>
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