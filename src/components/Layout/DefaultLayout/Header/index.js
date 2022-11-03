import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faLanguage, faHome } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import styles from './Header.module.scss';
import { Wrapper as PopupWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import ResultSearch from '~/components/ResultSearch';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <h2>Logo</h2>
                </div>
                <div className={cx('right-header')}>
                    <div className={cx('facilities-nav')}>
                        <div className={cx('search')}>
                            <Tippy
                                interactive
                                visible={searchResult.length > 0}
                                render={(attrs) => (
                                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                        {/* <PopupWrapper>
                                            <ResultSearch></ResultSearch>
                                        </PopupWrapper> */}
                                    </div>
                                )}
                            >
                                <input placeholder="tim kiem" spellCheck={false} />
                            </Tippy>
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faSpinner} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faCircleXmark} />

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                        <Button primary>EN</Button>
                    </div>
                    <div className={cx('navigation')}>
                        <button className={cx('home-btn')}>
                            <FontAwesomeIcon icon={faHome} />
                        </button>
                        <div className={cx('nav')}>
                            <ul>
                                <li>
                                    <Button to="/phim" textH>
                                        Phim
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/lichchieu" text>
                                        lich chieu
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/hotro" text>
                                        Rap gia
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/hotro" text>
                                        Gioithieu
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/hotro" text>
                                        Ho tro
                                    </Button>
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
