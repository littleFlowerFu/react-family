import React, {Component} from 'react';

export default class Counter extends Component {
  render () {
    return (
      <div>
        <div>当前计数为（显示redux计数）</div>
        <button onClick={() => {
          console.log('调用自增函数')
        }}>
          自增
        </button>
        <button onClick={() => {
          console.log('调用自减函数')
        }}>
          自减
        </button>
        <button onClick={() => {
          console.log('调用重置函数')
        }}>
          重置
        </button>
      </div>
    )
  }
}