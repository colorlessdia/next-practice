import LinkItem from "./LinkItem/LinkItem";

const GNB = () => {
  const linkList = [
    { href: '/routing', title: 'Routing' },
    { href: '/catch-all-segments', title: 'Catch-All-Segments' },
  ];

  return (
    <nav>
      <ul>
        {
          linkList.map(link => (
            <LinkItem key={link.href} link={link} />
          ))
        }
      </ul>
    </nav>
  );
};

export default GNB;
