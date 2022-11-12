import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import styles from './Search.module.scss';
import { Wrapper as PopupWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import ResultSearch from '~/components/ResultSearch';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    });

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <div className={cx('search')}>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopupWrapper>
                            <ResultSearch />
                            <ResultSearch />
                            <ResultSearch />
                        </PopupWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Tìm kiếm..."
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
            </HeadlessTippy>

            {/* <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faSpinner} />
                            </button> */}
            {!!searchValue && (
                <button className={cx('clear')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            )}

            <Tippy delay={[0, 200]} content="Tìm">
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </Tippy>
        </div>
    );
}

export default Search;
