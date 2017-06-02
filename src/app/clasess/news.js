"use strict";
var News = (function () {
    function News(author, title, description, url, urlToImage, publushedAt, source) {
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.publishedAt = publushedAt;
        this.source = source;
        this.isRead = false;
        this.liked = false;
    }
    Object.defineProperty(News.prototype, "author", {
        /**
         *
         *
         * @readonly
         *
         * @memberOf News
         */
        get: function () {
            return this._author;
        },
        /**
         *
         *
         * @param {string}
         * @memberof News
         */
        set: function (author) {
            if (typeof author === 'string' && author.length > 0) {
                this._author = author;
            }
            else {
                this._author = 'News Source Not Available';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(News.prototype, "title", {
        /**
         *
         *
         * @readonly
         *
         * @memberOf News
         */
        get: function () {
            return this._title;
        },
        /**
         *
         *
         * @param {string}
         * @memberof News
         */
        set: function (title) {
            if (typeof title === 'string' && title.length > 0) {
                this._title = title;
            }
            else {
                this._title = 'News Title Not Available';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(News.prototype, "description", {
        /**
         *
         *
         * @readonly
         *
         * @memberOf News
         */
        get: function () {
            return this._description;
        },
        /**
         *
         *
         * @param {string}
         * @memberof News
         */
        set: function (description) {
            if (typeof description === 'string' && description.length > 0) {
                this._description = description;
            }
            else {
                this._description = this.title;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(News.prototype, "url", {
        /**
         *
         *
         * @readonly
         *
         * @memberOf News
         */
        get: function () {
            return this._url;
        },
        /**
         *
         *
         * @param {string}
         * @memberof News
         */
        set: function (url) {
            if (typeof url === 'string' && url.length > 0) {
                this._url = url;
            }
            else {
                this._url = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(News.prototype, "urlToImage", {
        /**
         *
         *
         * @readonly
         *
         * @memberOf News
         */
        get: function () {
            return this._urlToImage;
        },
        /**
         *
         *
         * @param {string}
         * @memberof News
         */
        set: function (urlToImage) {
            if (!urlToImage) {
                this._urlToImage = 'http://advancedsolutionsonline.net/wp-content/uploads/2013/05/business-news.png';
            }
            else {
                this._urlToImage = urlToImage;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(News.prototype, "publishedAt", {
        /**
         *
         *
         * @readonly
         *
         * @memberOf News
         */
        get: function () {
            return this._publishedAt;
        },
        /**
         *
         *
         * @param {string}
         * @memberof News
         */
        set: function (publishedAt) {
            if (!publishedAt) {
                this._publishedAt = new Date();
            }
            else {
                this._publishedAt = new Date(publishedAt);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(News.prototype, "source", {
        /**
         *
         *
         * @readonly
         *
         * @memberOf News
         */
        get: function () {
            return this._source;
        },
        /**
         *
         *
         * @param {strinng}
         * @memberOf News
         */
        set: function (source) {
            if (!source) {
                this._source = 'News Source';
            }
            else {
                this._source = source;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(News.prototype, "isRead", {
        /**
         *
         *
         * @readonly
         *
         * @memberof News
         */
        get: function () {
            return this._isRead;
        },
        /**
         *
         *
         *
         * @memberof News
         */
        set: function (param) {
            this._isRead = param;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(News.prototype, "liked", {
        /**
         *
         * @readonly
         *
         * @memberof News
         */
        get: function () {
            return this._liked;
        },
        /**
         *
         *
         * @memberof News
         */
        set: function (param) {
            this._liked = param;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(News.prototype, "timeOflike", {
        get: function () {
            return this._timeOflike;
        },
        /**
         *
         *
         *
         * @memberof News
         */
        set: function (date) {
            date = new Date();
            this._timeOflike = date;
        },
        enumerable: true,
        configurable: true
    });
    return News;
}());
exports.News = News;
//# sourceMappingURL=news.js.map