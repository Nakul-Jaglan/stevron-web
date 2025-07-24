import NotFoundClient from './not-found-client';

export const metadata = {
  title: '404 - Page Not Found | Stevron Tools',
  description: 'The page you are looking for could not be found. Browse our professional tools catalog or contact us for assistance finding the right equipment.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
