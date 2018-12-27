import styles from './index.less';

class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    let props = this.props
    return (
      <div className={styles.normal}>
        <div className={styles.header}>Header</div>
        {props.children}
      </div>
    )
  }
}

export default BasicLayout;
