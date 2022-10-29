import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faLanguage, faHome } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}></div>
                <div className={cx('right-header')}>
                    <div className={cx('facilities-nav')}>
                        <div className={cx('search')}>
                            <input placeholder="tim kiem" spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faSpinner} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faCircleXmark} />
                            <Tippy content={'tim kiem'}>
                                <button className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </Tippy>
                        </div>
                        <button className={cx('en-btn')}>
                            <FontAwesomeIcon icon={faLanguage} />
                        </button>
                    </div>
                    <div className={cx('navigation')}>
                        <button className={cx('home-btn')}>
                            <FontAwesomeIcon icon={faHome} />
                        </button>
                        <div className={cx('nav')}>
                            <ul>
                                <li>
                                    <a href={'/phim'}>
                                        <h2>Phim</h2>
                                    </a>
                                </li>
                                <li>
                                    <a href={'/lichchieu'}>
                                        <h2>lich chieu</h2>
                                    </a>
                                </li>
                                <li>
                                    <a href={'/rapvagia'}>
                                        <h2>Rap va gia</h2>
                                    </a>
                                </li>
                                <li>
                                    <a href={'/gioithieu'}>
                                        <h2>Gioi thieu</h2>
                                    </a>
                                </li>
                                <li>
                                    <a href={'/hotro'}>
                                        <h2>Ho tro</h2>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
