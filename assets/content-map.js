// assets/content-map.js
// Site content section, keyword tags, and simple search filtering functions

const contentSections = [
  {
    id: 'home',
    label: '首页',
    tags: ['爱游戏', '推荐', '热门'],
    keywords: ['爱游戏', '首页', '推荐', '热门游戏']
  },
  {
    id: 'guide',
    label: '攻略',
    tags: ['爱游戏', '攻略', '技巧'],
    keywords: ['爱游戏', '攻略', '技巧', '教程']
  },
  {
    id: 'news',
    label: '资讯',
    tags: ['爱游戏', '资讯', '更新'],
    keywords: ['爱游戏', '资讯', '新闻', '更新']
  },
  {
    id: 'community',
    label: '社区',
    tags: ['爱游戏', '社区', '讨论'],
    keywords: ['爱游戏', '社区', '论坛', '交流']
  },
  {
    id: 'download',
    label: '下载',
    tags: ['爱游戏', '下载', '资源'],
    keywords: ['爱游戏', '下载', '客户端', '安装包']
  }
];

const siteUrl = 'https://sitem-aiyouxi.com.cn';

// Search filter function: returns sections matching query
function filterSectionsByQuery(query, sections = contentSections) {
  if (!query || typeof query !== 'string') return [];
  const normalized = query.trim().toLowerCase();
  if (normalized === '') return [];

  return sections.filter(section => {
    const matchKeywords = section.keywords.some(kw =>
      kw.toLowerCase().includes(normalized)
    );
    const matchTags = section.tags.some(tag =>
      tag.toLowerCase().includes(normalized)
    );
    const matchLabel = section.label.toLowerCase().includes(normalized);
    return matchKeywords || matchTags || matchLabel;
  });
}

// Example usage (not executed on import)
function demoSearch() {
  const examples = ['爱游戏', '攻略', '下载', '社区'];
  examples.forEach(query => {
    const result = filterSectionsByQuery(query);
    console.log(`搜索 "${query}" 结果数量: ${result.length}`);
    if (result.length > 0) {
      result.forEach(r => console.log(`  - ${r.label}`));
    }
  });
}

// Get all tags from sections
function getAllTags(sections = contentSections) {
  const tagSet = new Set();
  sections.forEach(s => s.tags.forEach(t => tagSet.add(t)));
  return Array.from(tagSet);
}

// Get all keywords from sections
function getAllKeywords(sections = contentSections) {
  const keywordSet = new Set();
  sections.forEach(s => s.keywords.forEach(k => keywordSet.add(k)));
  return Array.from(keywordSet);
}

// Find section by id
function findSectionById(id, sections = contentSections) {
  return sections.find(s => s.id === id) || null;
}

// Export for Node.js or browser usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    contentSections,
    siteUrl,
    filterSectionsByQuery,
    getAllTags,
    getAllKeywords,
    findSectionById,
    demoSearch
  };
}