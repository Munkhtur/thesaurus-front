interface IResponse {
  name: string;
  type: string;
  url: string;
  identifier: string;
  description: string;
  published_at: string;
}


interface IResponseWords {
  ID: Number;
  Code: string;
  Word: string;
  Definition: string;
  Synonyms: Array<any>
}
