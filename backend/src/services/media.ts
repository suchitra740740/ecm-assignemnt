import axios from 'axios';

export interface Media {
    id:          number;
    title:       Title;
    coverImage:  CoverImage;
    description: string;
}

export interface CoverImage {
    extraLarge: string;
    large:      string;
    medium:     string;
    color:      string;
}

export interface Title {
    romaji:  string;
    english: string;
    native:  string;
}

export async function fetchMedia() {
    var query = `
query ($id: Int, $page: Int, $perPage: Int, $search: String) {
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media (id: $id, search: $search) {
      id
      title {
        romaji
        english
        native
      }
      coverImage {
        extraLarge
        large
        medium
        color
      }
      description
    }
  }
}
`;
var variables = {
    page: 1,
    perPage: 10
};
    let payload = JSON.stringify({
        query: query,
        variables: variables
    })
    const response = await axios.post(`https://graphql.anilist.co`,
        payload,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }
    );
    return response.data.data.Page.media as Media
}
