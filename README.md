<h3 align="center">
  <img src="https://user-images.githubusercontent.com/58083563/89603440-87bbea00-d83f-11ea-88f1-40ded3561784.png" alt="Typescript" width="150" />
  <img src="https://user-images.githubusercontent.com/58083563/89603314-3f9cc780-d83f-11ea-974a-82f2ed7ab879.png" alt="React" width="200" />
</h3>
<h3 align="center">React + Hooks + Typescript</h3>
<br>
<p align="center">
  <a href="#rocket-Hooks">Hooks</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-Configuration">Configuration</a>&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Hooks

#### 1. useState

```js
const [state, setState] = useState();
```

#### 2. useReducer

```js
const [state, dispatch] = useReducer(reducer, initialState)
```

#### 3. useRef

```js
const ref = useRef();
```

#### 4. useEffect

```js
useEffect(() => {
  console.log('Hello')
}, [])
```

#### 5. useLayoutEffect

```js
useLayoutEffect(() => {
  console.log('Hello')
}, [])
```

#### 6. useCallback

```js
const handleIncrement1 = useCallback(() => {
  setCount1(count1 + 1);
}, [count1])
```

#### 7. useMemo

```js
const slowFunction = useMemo(() => {
  for(let i = 0; i < 10 ** 9; i+= 1) {
    i += 1;
    i -=1;
  }

  if(count1 % 2 == 0) {
    return 'red';
  }

  if(count1 % 3 == 0) {
    return 'blue';
  }

  if(count1 % 4 == 0) {
    return 'green'
  }

  return 'orange'
}, [count1])
```

#### 8. useImperativeHandle

```js
useImperativeHandle(ref, () => {
    return {
        name: 'Daniel'
    }
})
```

#### 9. useDebugValue

```js
const useCustomHook = () => {
  const [hook, setHook] = useState(true);

  useDebugValue(hook ? 'True' : 'False');

  return hook;
}
```

## :wrench: Configuration

#### 1. Install all dependencies with

```sh
$ npm install 
```

or using yarn

```sh
$ yarn
```

#### 2. Start the dev server

```sh
$ npm start
```

or using yarn

```sh
$ yarn start
```
