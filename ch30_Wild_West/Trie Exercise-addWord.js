class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    let node = this.characters;
    let chars;
    for (let c of word) {
      if (!node[c]) node[c] = new Trie();
      chars = node[c];
      node = node[c].characters;
    }
    chars.isWord = true;
  }

  removeWord(word) {
    if (word.length === 0) {
      this.isWord = false;
      return;
    }
    let trie = this.characters[word[0]];
    trie.removeWord(word.slice(1));
    if (Object.keys(trie.characters).length === 0) {
      if (!this.isWord) delete this.characters[word[0]];
    }
  }

  findWord(word, index = 0) {
    let node = this.characters;
    let chars;
    for (let c of word) {
      if (!node[c]) return undefined;
      chars = node[c];
      node = node[c].characters;
    }
    return chars;
  }

  getWords(words = [], currentWord = "") {
    let trie = this;
    if (trie.isWord) words.push(currentWord);
    for (let c in trie.characters) {
      let word = currentWord + c;
      trie.characters[c].getWords(words, word);
    }
    return words;
  }

  autoComplete(prefix) {
    let chars = this.characters,
      trie;
    for (let c of prefix) {
      if (chars[c]) {
        trie = chars[c];
        chars = chars[c].characters;
      } else return [];
    }
    return trie.getWords([], prefix);
  }
}
// getWords & autoComplete
let t = new Trie();
t.addWord("fun");
t.addWord("fast");
t.addWord("fat");
t.addWord("fate");
t.addWord("father");
t.addWord("forget");
t.addWord("awesome");
t.addWord("argue");

console.log(t.autoComplete("fa")); //[fast,fat,fate,father]
console.log(t.autoComplete("a")); //[awesome,argue]
console.log(t.autoComplete("arz")); //[]

// console.log(t.getWords()); //[fun,fast,fat,fate,father,forget,awesome,argue]
// console.log(t.getWords().length); //8

// findWord
// let t = new Trie();
// t.addWord("fun");
// t.addWord("fast");
// t.addWord("fat");
// t.addWord("fate");
// t.addWord("father");

// console.log(t.findWord("taco")); //undefined
// console.log(t.findWord("fat")); //{t:Trie}
// console.log(t.findWord("fat").characters); //{t:Trie}
// console.log(t.findWord("father").characters); //{}
// console.log(t.findWord("father").isWord); //true

// removeWord
// let t = new Trie();
// t.addWord("fun");
// t.addWord("fast");
// t.addWord("fat");
// t.addWord("fate");
// t.addWord("father");
// t.addWord("forget");
// t.addWord("awesome");
// t.addWord("argue");

// t.removeWord("fat");

// console.log(t.characters.f.characters.a.characters.t.isWord); // false
// console.log(t.characters.f.characters.a.characters.t.characters.e.isWord); // true

// t.removeWord("argue");
// console.log(t.characters.a.characters.r); //undefined

// addWord
// let firstTrie = new Trie();
// firstTrie.addWord("fun");
// console.log(firstTrie.characters); //{f:Trie}
// console.log(!!firstTrie.characters["f"]); //true

// console.log(firstTrie.characters.f.characters.u);
// console.log(!!firstTrie.characters.f.characters.u);
