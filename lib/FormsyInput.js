'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _semanticUiReact = require('semantic-ui-react');

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('./utils');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyInput = (_dec = (0, _formsyReact.Decorator)(), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(FormsyInput, _Component);

  function FormsyInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyInput.__proto__ || Object.getPrototypeOf(FormsyInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = { allowError: false, value: null }, _this.setInputValue = (0, _lodash2['default'])(function (value) {
      return _this.props.setValue(value);
    }, 100), _this.handleChange = function (e, data) {
      var value = data.value;

      _this.setState({ value: value });
      _this.setInputValue(value);
      if (_this.props.onChange) _this.props.onChange(e, data);
      if (_this.props.instantValidation) _this.showError();
    }, _this.handleBlur = function () {
      _this.showError();
      if (_this.props.onBlur) _this.props.onBlur();
    }, _this.showError = function () {
      return _this.setState({ allowError: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyInput, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _props = this.props,
            defaultValue = _props.defaultValue,
            setValue = _props.setValue;

        if (defaultValue) setValue(defaultValue);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        if (nextProps.isFormSubmitted()) this.showError();
        this.setState({ value: this.props.getValue() });
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props2 = this.props,
            as = _props2.as,
            required = _props2.required,
            label = _props2.label,
            defaultValue = _props2.defaultValue,
            isValid = _props2.isValid,
            isPristine = _props2.isPristine,
            getErrorMessage = _props2.getErrorMessage,
            errorLabel = _props2.errorLabel;
        var _state = this.state,
            allowError = _state.allowError,
            value = _state.value;

        var error = !isPristine() && !isValid() && allowError;

        var inputProps = _extends({}, (0, _utils.filterSuirElementProps)(this.props), {
          value: value || isPristine() && defaultValue || '',
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          error: error,
          label: label
        });

        var shortHandMode = as === _semanticUiReact.Form.Input || as === _semanticUiReact.Form.TextArea;
        var inputNode = shortHandMode ? (0, _react.createElement)(as).props.control : as;

        if (shortHandMode) {
          delete inputProps.label;
          if (as === _semanticUiReact.Form.TextArea) delete inputProps.error;
        }

        return _react2['default'].createElement(
          _semanticUiReact.Form.Field,
          { required: required, error: error },
          shortHandMode && _react2['default'].createElement(
            'label',
            null,
            ' ',
            label,
            ' '
          ),
          (0, _react.createElement)(inputNode, _extends({}, inputProps)),
          error && errorLabel && (0, _react.cloneElement)(errorLabel, {}, getErrorMessage())
        );
      }

      return render;
    }()
  }]);

  return FormsyInput;
}(_react.Component), _class2.propTypes = {
  name: _propTypes2['default'].string.isRequired,
  as: _propTypes2['default'].oneOf([_semanticUiReact.Input, _semanticUiReact.TextArea, _semanticUiReact.Form.Input, _semanticUiReact.Form.TextArea]),
  errorLabel: _propTypes2['default'].element,
  required: _propTypes2['default'].bool,
  label: _propTypes2['default'].string,
  instantValidation: _propTypes2['default'].bool,
  defaultValue: _propTypes2['default'].string,
  onBlur: _propTypes2['default'].func,
  isValid: _propTypes2['default'].func.isRequired,
  setValue: _propTypes2['default'].func.isRequired,
  getValue: _propTypes2['default'].func.isRequired,
  onChange: _propTypes2['default'].func,
  isPristine: _propTypes2['default'].func.isRequired,
  getErrorMessage: _propTypes2['default'].func.isRequired,
  validationError: _propTypes2['default'].string,
  validationErrors: _propTypes2['default'].object,
  validations: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object])
}, _class2.defaultProps = { as: _semanticUiReact.Input }, _temp2)) || _class);
exports['default'] = FormsyInput;