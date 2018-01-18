import preact from 'preact';
import SomeComponent from './Component';

export default id => {
  preact.render(
    <SomeComponent id={id} caption="this is some app." />,
    document.body,
    document.getElementById(id)
  );
};
