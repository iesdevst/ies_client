import Button from 'antd/es/button';
import Result from 'antd/es/result';
// prettier-ignore
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';

export function RouteErrorBoundary() {
  const error = useRouteError();
  const navigation = useNavigate();

  const title = 'Oops! Something went wrong';
  let subTitle = 'Unknown Error';

  if (isRouteErrorResponse(error)) {
    subTitle =
      `${error.status} ${error.statusText}` +
      (error.data ? ` — ${String(error.data)}` : '');
  } else if (error instanceof Error) {
    subTitle = error.message || subTitle;
  } else if (typeof error === 'string') {
    subTitle = error;
  }

  return (
    <Result
      status='error'
      title={title}
      subTitle={subTitle}
      extra={
        <>
          <Button onClick={() => navigation(0)}>Try Again</Button>
          <PrefetchLink to={ROUTES.DASHBOARD}>
            <Button type='primary'>Back to Dashboard</Button>
          </PrefetchLink>
        </>
      }
    />
  );
}
