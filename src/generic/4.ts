interface Props {
  title: string;
}

class Component<T extends Props> {
  constructor(public props: T) {}
}

class Page extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Приклад використання:
const page = new Page({ title: 'Sample Page' });
page.pageInfo(); 

export {};
