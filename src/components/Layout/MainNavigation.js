import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation()
{
  return(
      <header className={classes.header}>
          <div className={classes.logo}>React MeetUps</div>
          <nav>
              <ul>
                  <li> 
                      <Link to={'/'}> All Meetsups</Link>
                  </li>
                  <li> 
                      <Link to={'/new-meetup'}>Add New Meetsup</Link>
                  </li>
                  <li> 
                      <Link to={'/favourites'}>My Favourites</Link>
                  </li>
              </ul>
          </nav>
      </header>
  );
}
export default MainNavigation;