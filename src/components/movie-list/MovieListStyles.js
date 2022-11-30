import { createUseStyles } from 'react-jss';
const listStyles = createUseStyles({
  '.results': {
    margin: '27px 0',
    fontSize: '20px',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '.span': {
    fontWeight: '600',
    marginLeft: '45px',
  },
  '.list': {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '15px',
    rowGap: '50px',
    justifyContent: 'space-evenly',
    padding: 0,
    listStyle: 'none',
  },
  '.li': {
    width: '335px',
  },
  listcontainer: {
    width: '1200px',
    padding: '0 0 50px 0',
  },
});

export { listStyles };
