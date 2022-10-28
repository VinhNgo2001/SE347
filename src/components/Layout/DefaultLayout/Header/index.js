import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('faci-nav')}>
                    <div className={cx('search')}>
                        <input placeholder="tiem kiem" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon className={cx('loading')} icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={cx('nav')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
