
export const googleSearchResultsDataMapper = result => {

  const {
    title = '',
    pagemap: {
      cse_image = []
    } = {}
  } = result;

  const [ imageObj = {} ] = cse_image;

  const { src = '' } = imageObj;

  return {
    name: title,
    mainImage: src
  };
};

export const dataMapperNameMapping = {
  'google': googleSearchResultsDataMapper
};
