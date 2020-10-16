import React from 'react';
// import styles from './Input.module.css';
import Autocomplete from 'react-autocomplete';

const menuStyle = {
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '90%',
    position: 'static',
    overflow: 'auto',
    maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
    "zIndex": 100,
};

// import Animations from '../Animations/Animations.module.css';

// const Input = (props) => {

//     return (

//         <input
//             style={{ animationDelay: props.animationDelayTime }}
//             className={[styles.Input, Animations.FadeIn].join(' ')}
//             placeholder="#PIN"
//             onChange={props.onChangeHandler}
// defaultValue={props.inputDynamicValue}
//         />

//     );

// };

const Input = (props) => {

    return (
        <Autocomplete
            items={[
                { id: 'userPIN', label: props.savedUserPIN }
               
            ]}
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}

            inputProps={{ style: { width: '100%', height: '100px' }, placeholder: '#PIN' }}
            wrapperStyle={{ width: '100%' }}

            menuStyle={menuStyle}
            renderItem={(item, highlighted) =>
                <div
                    key={item.id}
                    style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
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