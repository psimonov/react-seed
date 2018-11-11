import React, { Component } from 'react';

import _ from 'lodash';

import styles from '../App.module.sass';

import Api from '../services/ApiService';
import Time from '../services/TimeService';

class Home extends Component<any, any> {
  state = {
    titles: [],
    date: '',
  };

  public async componentDidMount() {
    const { data } = await Api.get('/posts');

    const titles = _.chain(data)
      .map('title')
      .sort()
      .slice(0, 10)
      .value();

    const date = Time.format('D.MM.YYYY H:mm');

    this.setState({
      titles,
      date
    });
  }

  public render() {
    return (
      <React.Fragment>
        <div className={styles.header}>Home ({this.state.date})</div>
        <ul>
          {(() => this.state.titles.map((item, k) => <li key={k}>{item}</li>))()}
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
