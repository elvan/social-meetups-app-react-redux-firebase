import { useSelector } from 'react-redux';

export const SandboxPage = () => {
  const data = useSelector((state) => state.data);

  return (
    <div>
      <h1>Sandbox Page</h1>
      <p>
        The data from the redux store is: <strong>{data}</strong>
      </p>
    </div>
  );
};
