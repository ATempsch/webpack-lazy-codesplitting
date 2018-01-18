import preact from 'preact';

export default class extends preact.Component {
  constructor() {
    super();
    this.state = {};
  }
  render({ id, caption }) {
    const LazyComponent = this.state.lazyComponent;
    return (
      <div id="app">
        <div
          onClick={() => {
            import('./Component').then(module => {
              this.setState({ lazyComponent: module.default });
            });
          }}
        >
          {id} -> {caption}
        </div>
        {!!LazyComponent && (
          <LazyComponent
            id="lazyC"
            caption="this component just got lazy loaded. it's a subcomponent of appThree"
          />
        )}
      </div>
    );
  }
}
