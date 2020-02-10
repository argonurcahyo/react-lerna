const baseUrl: string = process.env.REACT_APP_APIARY || '';

class AppSample {
  private uri: string;

  constructor(uri: string) {
    this.uri = uri;
  }

  public read = (params: any) => ({
    baseUrl,
    method: 'get',
    params,
    uri: this.uri,
  });

  public readOne = (id: any) => ({
    baseUrl,
    method: 'get',
    uri: `/v1/customer/me`,
  });

  public post = (params: any) => ({
    baseUrl,
    method: 'post',
    params,
    uri: this.uri,
  });

  public put = (params: any, id: string) => ({
    baseUrl,
    method: 'put',
    params,
    uri: `${this.uri}/${id}`,
  });

  public delete = (id: string) => ({
    baseUrl,
    method: 'delete',
    uri: `${this.uri}/${id}`,
  });
}

export default new AppSample('/master/customer');
