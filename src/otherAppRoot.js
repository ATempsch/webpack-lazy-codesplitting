import preact from 'preact';
import RootComponent from './RootComponent';

export default id => {
  preact.render(
    <div>
      <RootComponent
        id={id}
        caption="this is some app, click it for loading lazy subcomponent"
      />
    </div>,
    document.body,
    document.getElementById(id)
  );
};
