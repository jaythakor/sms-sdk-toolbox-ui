# Dropdown
A Dropdown component, that wraps the basic functionalities of 
https://github.com/JedWatson/react-select, but includes the toolbox's own styling and Components.

Please for further customization please follow the above documentation,
everything passed to DataGrid will be propagated and **override** any prop.

Do keep in mind that there are two ways to pass in a value: Both through the ```value``` prop, and the ```chosenValue``` prop.

The ```value``` prop is the direct prop to React Select, and expects an object with *value* and *label*. The ```chosenValue``` expects only the value as a string.

The Dropdown also incorporates loading functionality, that takes in a handler to execute every time the Dropdown is focused. This is built to be used with Asynchronous fecthing, and dynamically load the Dropdown with options.

## Sample
```jsx
const [value, changeValue] = useState(null);
const options = [{
  value: 'option1',
  label: 'Option 1',
}, {
  value: 'option2',
  label: 'Option 2',
}, {
  value: 'option3',
  label: 'Option 3',
}];

return (<Dropdown
  options={options}
  onChange={changeValue}
  value={value}
/>);
```

## Async Sample
```jsx
const [value, changeValue] = useState(null);
const [isLoading, toggleIsLoading] = useState(null);

return (<Dropdown
  options={options}
  onChange={changeValue}
  value={value}
  clickHandler={() => {
    toggleIsLoading(true);
    fetchOptions();
  }}
  loading={isLoading}
/>);
```

## Proptypes
```jsx
Dropdown.propTypes = {
  disabled: PropTypes.bool,
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.object,
  chosenValue: PropTypes.string,
  noOptionsMessage: PropTypes.string,
  theme: PropTypes.object.isRequired,
  components: PropTypes.object,
  clickHandler: PropTypes.func,
  isLoading: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Dropdown.defaultProps = {
  disabled: false,
  options: [],
  onChange: null,
  value: null,
  chosenValue: null,
  noOptionsMessage: undefined,
  components: null,
  placeholder: undefined,
  isLoading: false,
  clickHandler: null,
  error: false,
  errorMessage: 'Something went wrong!',
};
```
