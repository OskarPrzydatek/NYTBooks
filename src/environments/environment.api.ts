export const environment = {
  APIkey: `FICEDLEAGrAn94GMwiMPQU30WDXpvOl2`,
  bestsellersURL(): string {
    return `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${this.APIkey}`;
  },
  searchURL(target): string {
    return `https://api.nytimes.com/svc/books/v3/reviews.json?${target}&api-key=${this.APIkey}`;
  }
};
