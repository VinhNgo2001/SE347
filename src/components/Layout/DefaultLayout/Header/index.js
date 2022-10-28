import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faLanguage, faHome } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('faci-nav')}>
                    <div className={cx('search')}>
                        <input placeholder="tim kiem" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faCircleXmark} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <button className={cx('en-btn')}>
                        <FontAwesomeIcon icon={faLanguage} />
                    </button>
                </div>
                <div className={cx('navigation')}>
                    <div className={cx('logo')}>logo</div>
                    <button className={cx('home-btn')}>
                        <FontAwesomeIcon icon={faHome} />
                    </button>
                    <div className={cx('nav')}>
                        <button className={cx('')}>Phim</button>
                        <button className={cx('')}>Lich chieu</button>
                        <button className={cx('')}>Rap va gia</button>
                        <button className={cx('')}>Ho tro</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
