class Mention {
    constructor({ data, api }) {
        this.data = data;
        this.api = api;
        this.visiblePopup = false;
        this.config = {};
        this.currentBlockIndex = -1;
        this.mentionListener();
    }

    mentionListener() {
        let element = document.querySelector('#editor');
        let listContainer = document.createElement('div');
        listContainer.classList.add('list-container');

        this.api.listeners.on(
            element,
            'keydown',
            (e) => this.handleMention(e, listContainer),
            false
        );
    }

    initConfig(blockIndex, currentBlockObj) {
        if (this.currentBlockIndex !== blockIndex && blockIndex !== -1) {
            this.currentBlockIndex = blockIndex;
            this.config = currentBlockObj.config;
        }
    }

    handleMention(e, listContainer) {
        let blockIndex, currentBlockObj, currentBlock, textBlock;
        let deletedChar;

        blockIndex = this.api.blocks.getCurrentBlockIndex();
        currentBlockObj = this.api.blocks.getBlockByIndex(blockIndex);
        currentBlock = currentBlockObj.holder.querySelector('.ce-paragraph');
        textBlock = currentBlock.innerHTML;

        this.initConfig(blockIndex, currentBlockObj);
        let node = window.getSelection().baseNode.parentElement;

        if (node.className == 'mention-item') {
            this.selectText(node.id);
        }

        if (e.key === '@') {
            this.visiblePopup = true;
        } else if (e.code == 'Backspace' || e.code == 'Delete') {
            deletedChar = textBlock.charAt(textBlock.length - 1);
            if (this.visiblePopup) {
                this.closeList(currentBlockObj);
            }
        }

        if (this.visiblePopup)
            this.showPopUp(
                currentBlock,
                listContainer,
                currentBlockObj,
                textBlock
            );
    }

    showPopUp(currentBlock, listContainer, currentBlockObj, textBlock) {
        const dimensions = currentBlock.getBoundingClientRect();
        const selection = window.getSelection(),
            range = selection.getRangeAt(0),
            caretPosition = range.getClientRects()[0];
        listContainer.style.left =
            typeof caretPosition !== 'undefined'
                ? `${caretPosition.left - 751}px`
                : `${751 - dimensions.left}px`;

        this.initList(listContainer, currentBlockObj, textBlock);
    }

    initList(listContainer, currentBlock, textBlock) {
        let mentionString = this.getMentionString(textBlock);
        let items = mentionString
            ? this.filter(this.config.items, mentionString)
            : this.filter(this.config.items, '');

        let divNoResults = document.createElement('div');
        divNoResults.innerHTML = 'No results';

        let list = items.length > 0 ? this.renderList(items) : divNoResults;
        listContainer.innerHTML = '';
        listContainer.appendChild(list);
        currentBlock.holder.appendChild(listContainer);
    }

    setItem(id) {
        const blockIndex = this.api.blocks.getCurrentBlockIndex();
        const currentBlockObj = this.api.blocks.getBlockByIndex(blockIndex);
        const currentBlock = currentBlockObj.holder.querySelector(
            '.ce-paragraph'
        );
        let item = this.config.items.find((item) => item.id == id);
        this.renderItem(currentBlock, item);
        this.closeList(currentBlockObj);
    }

    renderList(items) {
        let self = this;
        let listElement = document.createElement('ul');

        let numberOfListItems = items.length;

        for (let i = 0; i < numberOfListItems; ++i) {
            // create an item for each one
            let listItem = document.createElement('li');

            let div = document.createElement('div');

            div.innerHTML = `${items[i].name} ${items[i].lastName}`;
            div.onclick = function () {
                self.setItem(items[i].id);
            };
            // Add the item text
            listItem.appendChild(div);

            // Add listItem to the listElement
            listElement.appendChild(listItem);
        }
        return listElement;
    }

    closeList(currentBlock) {
        this.visiblePopup = false;
        let listContainer = document.querySelector('.list-container');
        if (listContainer) {
            currentBlock.holder.removeChild(listContainer);
        }
    }

    getMentionString(text) {
        var re = /(?:^|\W)@(\w+)(?!\w)/g,
            match,
            matches = [];
        while ((match = re.exec(text))) {
            matches.push(`@${match[1]}`);
        }

        return matches[matches.length - 1] || '@';
    }

    renderItem(currentBlock, item) {
        const self = this;
        const mentionItem = document.createElement('span');
        let textToReplace = this.getMentionString(currentBlock.innerHTML);
        mentionItem.classList.add('mention-item');
        mentionItem.setAttribute('data-value', item.id);
        let randomId = Math.floor(Math.random() * 100);
        let mentionId = `${item.id}-${randomId}`;
        mentionItem.id = mentionId;

        mentionItem.innerHTML = `${item.name} ${item.lastName}`;
        mentionItem.onclick = function () {
            self.selectText(mentionId);
        };

        let finalText = currentBlock.innerHTML.replace(textToReplace, '');
        currentBlock.innerHTML = finalText;
        currentBlock.appendChild(mentionItem);

        this.moveCursorToEnd(mentionId);
    }

    moveCursorToEnd(eleId) {
        let range = document.createRange();
        range.selectNode(document.getElementById(eleId));
        range.collapse(false);

        let node = document.createTextNode('\u00A0');
        range.insertNode(node);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }

    selectText(containerid) {
        let range;
        if (document.selection) {
            // IE
            range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(containerid));
            range.select();
        } else if (window.getSelection) {
            range = document.createRange();
            range.selectNodeContents(document.getElementById(containerid));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
    }

    filter(items, value) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        const escapedValue = this.escapeRegexCharacters(inputValue);
        const regex = new RegExp('^' + escapedValue, 'i');
        return inputLength === 0
            ? items
            : items.filter(
                  (item) =>
                      regex.test(`@${item.name}`) ||
                      regex.test(`@${item.lastName}`)
              );
    }

    escapeRegexCharacters(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

module.exports = {
    Mention,
};
