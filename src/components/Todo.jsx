import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addtodo, deletetodo, removeall } from "../actions";

const Todo = () => {
    const [inputData, setInputData] = useState("");

    const dispatch = useDispatch();

    const list = useSelector((state) => state.todoreducer.list);

    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>add your list here</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="add your items" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <button className="btn " onClick={() => dispatch(addtodo(inputData), setInputData(""))}>
                        add
                    </button>
                </div>
                <div className="showItems">
                    {list.map((elem) => {
                        return (
                            <div className="eachItem" key={elem.id}>
                                <h3>{elem.data}</h3>
                                <button className="btn " onClick={() => dispatch(deletetodo(elem.id))}>
                                    remove
                                </button>
                            </div>
                        );
                    })}
                </div>

                <div className="showItems">
                    <button className="btn" onClick={() => dispatch(removeall())}>
                        delete all
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;
