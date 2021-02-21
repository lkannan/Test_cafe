import { Selector, t } from 'testcafe'

class SearchResultsPage {
	constructor() {
		this.searchResultText = Selector('h2')
		this.resultLink = Selector('div.top_offset')
	}
}

export default SearchResultsPage
