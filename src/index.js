import './css/reset.css';
import './css/common.css';
import '../src/components/header/header.css';
import '../src/components/movieListWrapper/MovieListWrapper.css';
import '../src/components/movieCard/movieCard.css';
import '../src/components/toast/toast.css';
import '../src/components/modal/modal.css';
import '../src/components/recommendStar/recommendStar.css'

import './images/logo.png';
import './images/search_button.png';
import './images/star_empty.png';
import './images/star_filled.png';

import AppController from './AppController';

new AppController().start();
