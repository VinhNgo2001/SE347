import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faUser,
    faHome,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import styles from './Header.module.scss';
import { Wrapper as PopupWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import ResultSearch from '~/components/ResultSearch';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 3000);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left-header')}>
                    <div className={cx('logo')}>
                        <img src={images.logo} height={110} />
                    </div>
                </div>
                <div className={cx('right-header')}>
                    <div className={cx('facilities-nav')}>
                        <div className={cx('search')}>
                            <HeadlessTippy
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
                                <input placeholder="Tìm kiếm..." spellCheck={false} />
                            </HeadlessTippy>
                            {/* <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faSpinner} />
                            </button> */}
                            <FontAwesomeIcon className={cx('loading')} icon={faCircleXmark} />

                            <Tippy delay={[0, 200]} content="Tìm">
                                <button className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </Tippy>
                        </div>
                        {currentUser ? (
                            <div className={cx('current-user')}>
                                <FontAwesomeIcon icon={faUser} />
                                <a href="#"> Xin chào,</a>

                                <Button primary to="/#">
                                    <FontAwesomeIcon icon={faRightFromBracket} />
                                </Button>
                            </div>
                        ) : (
                            <div className={cx('login')}>
                                <FontAwesomeIcon icon={faUser} />

                                <Button primary to="/dangnhap">
                                    Đăng nhập
                                </Button>
                            </div>
                        )}

                        {/* <Button primary>EN</Button> */}
                    </div>
                    <div className={cx('navigation')}>
                        <div className={cx('home-btn')}>
                            <Button primary>
                                <FontAwesomeIcon icon={faHome} />
                            </Button>
                        </div>
                        <div className={cx('nav')}>
                            <ul>
                                <li>
                                    <Button to="/phim" textH>
                                        PHIM
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/lichchieu" text>
                                        LỊCH CHIẾU
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/hotro" text>
                                        RẠP GIÁ
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/hotro" text>
                                        GIỚI THIỆU
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/hotro" text>
                                        GIỚI THIỆU
                                    </Button>
                                </li>
                                <li>
                                    <Button to="/hotro" textF>
                                        HỖ TRỢ
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
