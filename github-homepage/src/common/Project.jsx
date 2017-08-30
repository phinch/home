import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  Project: {
    cursor: 'pointer',
    margin: '50px 0',
    borderTop: 'solid #EBFAFF 1px',
    borderBottom: 'solid #EBFAFF 3px',
/*     borderTopLeftRadius: 5,
    borderTopRightRadius: 5, */
    height: 200,
    overflow: 'hidden',
    transition: 'all 0.5s ease',

    ':hover': {
      height: 250,
    },
  },
  title: {
    paddingTop: 25,
    paddingLeft: 25,
    zIndex: 3,
    position: 'absolute',
  },
  subtitle: {
    paddingTop: 25,
    paddingLeft: 25,
    zIndex: 3,
    position: 'absolute',
    marginTop: 50,
  },
  image: {
    width: '100%',
    opacity: 0.2,
    transition: 'all 0.5s ease',

    ':hover': {
      opacity: 0.4,
    }
  }
});

const projectData = {
  wimbledon: {
    link: 'https://phinch.github.io/wimbledon',
    title: 'Wimbledon',
    img: './assets/wimbledon.png',
    subtitle: 'autumn 2016.',
  },
  newYorkTaxis: {
    link: 'https://github.com/phinch/Taxis-New-York',
    title: 'New York Taxis',
    img: './assets/new-york-taxis.png',
    subtitle: 'summer 2016.',
  },
  mareysTrains: {
    link: 'https://phinch.github.io/mareys-trains',
    title: `Marey's Trains`,
    img: '../assets/mareys-trains.png',
    subtitle: 'spring 2016.',
  },
  rottenPotatoes: {
    link: 'https://github.com/phinch/Rotten-Potatoes',
    title: 'Rotten Potatoes',
    img: '../assets/rotten-potatoes.png',
    subtitle: 'spring 2016.',
  },
};

export default class Project extends Component {
  render() {
    const { type } = this.props;
    return (
      <div className={css(styles.Project)} onClick={this.handleClick(type)}>
        <h2 className={css(styles.title)}>{projectData[type].title}</h2>
        <h3 className={css(styles.subtitle)}>{projectData[type].subtitle}</h3>
        <img className={css(styles.image)} src={projectData[type].img} alt={projectData[type].title}/>
      </div>
    );
  }

  handleClick(type) {
    return () => window.location.replace(projectData[type].link);
  }
}
