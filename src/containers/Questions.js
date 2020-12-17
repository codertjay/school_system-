import { Steps, Button, message } from 'antd';
import React from 'react'


const { Step } = Steps;

class Questions extends React.Component {


    state = {
        current: 0
    }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    const {questions} = this.props
    return (
      <>
        <Steps progressDot current={current}>
          {questions.map((q,index) => (
            <Step key={index}  />
          ))}
        </Steps>
        <div >{questions[current]}</div>
        <div >
          {current < questions.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === questions.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </>
    );
  }
}

export default Questions