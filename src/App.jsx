import React, {useEffect, useState, useCallback, useMemo} from "react"
import { InputTodo } from './components/InputTodo'
import { IncompleteTodos } from './components/IncompleteTodos'
import { CompleteTodos} from "./components/CompleteTodos"
import {ChildArea} from "./components/ChildArea";
import {InlineStyle} from "./components/InlineStyle";
import {CssModules} from "./components/CssModules";
import {StyledJsx} from "./components/StyledJsx";
import {StyledComponents} from "./components/StyledComponents";
import {Emotion} from "./components/Emotion";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Router} from "./router/Router";

export const App = () => {
    const [text, setText] = useState()
    const [open, setOpen] = useState(false)

    const [todoText, setTodoText] = useState('')
    const [incompleteTodos, setIncompleteTodos] = useState([])
    const [completeTodos, setCompleteTodos] = useState([])

    const onChangeText = (event) => {
        setText(event.target.value)
    }

    const onChangeTodoText = (event) => setTodoText(event.target.value)
    const onClickOpen = () => setOpen(!open)
    // deps=[]だと最初に設定したものをずっと使う
    const onClickClose = useCallback(() => setOpen(false), [])
    const temp = useMemo(() => 1 + 3, [])

    const onClickAdd = () => {
        if(todoText === "") {
            alert("空文字です")
            return
        }
        const newTodos = [...incompleteTodos, todoText]
        setIncompleteTodos(newTodos)
        setTodoText("")
    }

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos]
        newTodos.splice(index, 1)
        setIncompleteTodos(newTodos)
    }

    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos]
        newIncompleteTodos.splice(index, 1)
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
        setIncompleteTodos(newIncompleteTodos)
        setCompleteTodos(newCompleteTodos)
    }

    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos]
        newCompleteTodos.splice(index, 1)

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
        setCompleteTodos(newCompleteTodos)
        setIncompleteTodos(newIncompleteTodos)
    }

    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <Link to="/">Home</Link><br/>
                    <Link to="/page1">Page1</Link><br/>
                    <Link to="/page2">Page2</Link><br/>
                </div>
                <Router />
            </BrowserRouter>

            <input value={text} onChange={onChangeText} />
            <br />
            <br />
            <button onClick={onClickOpen}>表示</button>
            {/*<InlineStyle />
            <CssModules />
            <StyledJsx />
            <StyledComponents />
            <Emotion />*/}
            <ChildArea open={open} onClickClose={onClickClose}/>
            <InputTodo
                todoText={todoText}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
                disabled={incompleteTodos.length >= 5}
            />
            { incompleteTodos.length >= 5 && (
                <p style={ {color: 'red'} }>登録できるtodoは5個まで</p>
            )}
            <IncompleteTodos
                todos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
            />
            <CompleteTodos
                todos={completeTodos}
                onClickBack={onClickBack}
            />
        </>
    );
};



/* const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  }
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag)
  }

  const [num, setNum] = useState(1);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  useEffect(() => {
    if(num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num])

  return(
    <>
      <h1 style={{ color: 'red' }}>こんにちは！!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br/>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>😍</p>}
      <p>{num}</p>
    </>
  );
}; */
