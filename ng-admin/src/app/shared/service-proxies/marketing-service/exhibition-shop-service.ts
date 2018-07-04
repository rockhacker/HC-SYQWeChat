import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { SwaggerException, API_BASE_URL } from "@shared/service-proxies/service-proxies";
import { Inject, Optional, Injectable, InjectionToken } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Headers, ResponseContentType, Response } from "@angular/http";
import { Parameter, ApiResult } from '@shared/service-proxies/entity';
import { ExhibitionShop, Exhibition } from '@shared/entity/marketting';

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return Observable.throw(result);
    else
        return Observable.throw(new SwaggerException(message, status, response, headers, null));
}
export class ExhibitionShopServiceProxy {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: (key: string, value: any) => any = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    // exportExcel(input: any): Observable<ApiResult> {
    //     let url_ = this.baseUrl + "/api/services/app/ExhibitionShop/ExportManuscriptsExcel";
    //     url_ = url_.replace(/[?&]$/, "");

    //     const content_ = JSON.stringify(input);

    //     let options_ = {
    //         body: content_,
    //         method: "post",
    //         headers: new Headers({
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         })
    //     };

    //     return this.http.request(url_, options_).flatMap((response_) => {
    //         return this.processExportExcel(response_);
    //     }).catch((response_: any) => {
    //         if (response_ instanceof Response) {
    //             try {
    //                 return this.processExportExcel(response_);
    //             } catch (e) {
    //                 return <Observable<ApiResult>><any>Observable.throw(e);
    //             }
    //         } else
    //             return <Observable<ApiResult>><any>Observable.throw(response_);
    //     });
    // }
    // protected processExportExcel(response: Response): Observable<ApiResult> {
    //     const status = response.status;

    //     let _headers: any = response.headers ? response.headers.toJSON() : {};
    //     if (status === 200) {
    //         const _responseText = response.text();
    //         let result200: any = null;
    //         let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
    //         result200 = resultData200 ? ApiResult.fromJS(resultData200) : new ApiResult();
    //         return Observable.of(result200);
    //     } else if (status === 401) {
    //         const _responseText = response.text();
    //         return throwException("A server error occurred.", status, _responseText, _headers);
    //     } else if (status === 403) {
    //         const _responseText = response.text();
    //         return throwException("A server error occurred.", status, _responseText, _headers);
    //     } else if (status !== 200 && status !== 204) {
    //         const _responseText = response.text();
    //         return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    //     }
    //     return Observable.of<ApiResult>(<any>null);
    // }
    /**
     * 获取所有陈列店铺信息
     */
    getAll(skipCount: number, maxResultCount: number, parameter: Parameter[]): Observable<PagedResultDtoOfExhibitionShop> {
        let url_ = this.baseUrl + "/api/services/app/ExhibitionShop/GetPagedExhibitionShopsAsync?";
        if (skipCount !== undefined)
            url_ += "SkipCount=" + encodeURIComponent("" + skipCount) + "&";
        if (maxResultCount !== undefined)
            url_ += "MaxResultCount=" + encodeURIComponent("" + maxResultCount) + "&";
        if (parameter.length > 0) {
            parameter.forEach(element => {
                if (element.value !== undefined && element.value !== null) {
                    url_ += element.key + "=" + encodeURIComponent("" + element.value) + "&";
                }
            });
        }
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processGetAll(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetAll(response_);
                } catch (e) {
                    return <Observable<PagedResultDtoOfExhibitionShop>><any>Observable.throw(e);
                }
            } else
                return <Observable<PagedResultDtoOfExhibitionShop>><any>Observable.throw(response_);
        });
    }

    protected processGetAll(response: Response): Observable<PagedResultDtoOfExhibitionShop> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? PagedResultDtoOfExhibitionShop.fromJS(resultData200) : new PagedResultDtoOfExhibitionShop();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<PagedResultDtoOfExhibitionShop>(<any>null);
    }

    update(input: Exhibition): Observable<Exhibition> {
        let url_ = this.baseUrl + "/api/services/app/Exhibition/CreateOrUpdateExhibition";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(input);

        let options_ = {
            body: content_,
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processUpdate(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdate(response_);
                } catch (e) {
                    return <Observable<Exhibition>><any>Observable.throw(e);
                }
            } else
                return <Observable<Exhibition>><any>Observable.throw(response_);
        });
    }

    protected processUpdate(response: Response): Observable<Exhibition> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Exhibition.fromJS(resultData200) : new Exhibition();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<Exhibition>(<any>null);
    }
    get(): Observable<Exhibition> {
        let url_ = this.baseUrl + "/api/services/app/Exhibition/GetExhibitionByIdAsync";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processGet(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGet(response_);
                } catch (e) {
                    return <Observable<Exhibition>><any>Observable.throw(e);
                }
            } else
                return <Observable<Exhibition>><any>Observable.throw(response_);
        });
    }

    protected processGet(response: Response): Observable<Exhibition> {
        const status = response.status;
        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? Exhibition.fromJS(resultData200) : new Exhibition();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<Exhibition>(<any>null);
    }
    getExhibitionDetailById(id: string): Observable<ExhibitionShop> {
        let url_ = this.baseUrl + "/api/services/app/ExhibitionShop/GetExhibitionShopByIdAsync?";
        if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = {
            method: "get",
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).flatMap((response_) => {
            return this.processGetExhibitionDetailById(response_);
        }).catch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processGetExhibitionDetailById(response_);
                } catch (e) {
                    return <Observable<ExhibitionShop>><any>Observable.throw(e);
                }
            } else
                return <Observable<ExhibitionShop>><any>Observable.throw(response_);
        });
    }

    protected processGetExhibitionDetailById(response: Response): Observable<ExhibitionShop> {
        const status = response.status;
        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? ExhibitionShop.fromJS(resultData200) : new ExhibitionShop();
            return Observable.of(result200);
        } else if (status === 401) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status === 403) {
            const _responseText = response.text();
            return throwException("A server error occurred.", status, _responseText, _headers);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Observable.of<ExhibitionShop>(<any>null);
    }
}

export class PagedResultDtoOfExhibitionShop implements IPagedResultDtoOfExhibitionShop {
    totalCount: number;
    items: ExhibitionShop[];

    constructor(data?: IPagedResultDtoOfExhibitionShop) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.totalCount = data["totalCount"];
            if (data["items"] && data["items"].constructor === Array) {
                this.items = [];
                for (let item of data["items"])
                    this.items.push(ExhibitionShop.fromJS(item));
            }
        }
    }

    static fromJS(data: any): PagedResultDtoOfExhibitionShop {
        let result = new PagedResultDtoOfExhibitionShop();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["totalCount"] = this.totalCount;
        if (this.items && this.items.constructor === Array) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        return data;
    }

    clone() {
        const json = this.toJSON();
        let result = new PagedResultDtoOfExhibitionShop();
        result.init(json);
        return result;
    }
}

export interface IPagedResultDtoOfExhibitionShop {
    totalCount: number;
    items: ExhibitionShop[];
}