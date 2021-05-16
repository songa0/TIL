import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    //PureComponent : state, props에 변화가 없으면 render함수를 호출하지 않음
    //함수형으로 컴포넌트를 생성할 때는 memo를 쓸 것
    //Shallow Comparison 하여 주소가 같으면 변화된 것으로 인지하지 못함
    const inputRef = React.createRef();
    const formRef = React.createRef();
    const onSubmit = event => {
        event.preventDefault();//reloading되지 않음
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} action="" className="add-form" onSubmit={onSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Habit"
                className="habit-input"
            />
            <button className="habit-add" onClick={onSubmit}>Add</button>
        </form>
    );
});

export default HabitAddForm;