import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Plus, FileText, Clock, CheckCircle, Search } from 'lucide-react';
import Button from '../ui/Button';

interface Article {
  id: string;
  title: string;
  preview: string;
  lastModified: string;
  status: 'draft' | 'published';
  wordCount: number;
}

interface DashboardProps {
  userName: string;
  onCreateNew: () => void;
  onOpenArticle: (id: string) => void;
}

export default function Dashboard({ userName, onCreateNew, onOpenArticle }: DashboardProps) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'drafts' | 'published'>('drafts');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual data from API
  const articles: Article[] = [
    {
      id: '1',
      title: 'Superconductivity in Modern Transportation',
      preview: 'Exploring the applications of magnetic levitation in high-speed rail systems...',
      lastModified: '2 hours ago',
      status: 'draft',
      wordCount: 1247
    },
    {
      id: '2',
      title: 'The Future of Electromagnetic Systems',
      preview: 'An in-depth analysis of zero-resistance power transmission and its impact...',
      lastModified: '1 day ago',
      status: 'published',
      wordCount: 3420
    },
    {
      id: '3',
      title: 'Quantum Computing and AI Integration',
      preview: 'How quantum mechanics is revolutionizing artificial intelligence...',
      lastModified: '3 days ago',
      status: 'draft',
      wordCount: 892
    },
    {
      id: '4',
      title: 'Renewable Energy Infrastructure',
      preview: 'Building sustainable energy grids for the future...',
      lastModified: '1 week ago',
      status: 'published',
      wordCount: 2156
    },
  ];

  const filteredArticles = articles.filter(
    (article) =>
      article.status === activeTab &&
      (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.preview.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={`min-h-screen ${theme.bg} transition-colors duration-500`}>
      {/* Header */}
      <header className={`${theme.header} backdrop-blur-md border-b ${theme.border} sticky top-0 z-10`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" alt="ENX" className="w-10 h-10" />
              <span className={`text-xl font-bold ${theme.text}`}>ENNOVATINGX</span>
            </div>
            
            <Button onClick={onCreateNew} variant="primary" size="md">
              <Plus className="w-5 h-5 mr-2" />
              Create Research
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className={`text-3xl md:text-4xl font-bold ${theme.text} mb-2`}>
            Welcome back, {userName}!
          </h1>
          <p className={`${theme.textMuted}`}>
            Continue your research or start a new one
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${theme.textMuted}`} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-lg ${theme.bgCard} ${theme.text} border ${theme.border} focus:outline-none focus:ring-2 focus:ring-[#9DA7D0] transition-all duration-300`}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className={`inline-flex rounded-lg ${theme.bgCard} p-1 border ${theme.border}`}>
            <button
              onClick={() => setActiveTab('drafts')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'drafts'
                  ? `${theme.accentBg} text-white`
                  : `${theme.text} hover:${theme.bgAlt}`
              }`}
            >
              <Clock className="w-4 h-4 inline mr-2" />
              Drafts
            </button>
            <button
              onClick={() => setActiveTab('published')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'published'
                  ? `${theme.accentBg} text-white`
                  : `${theme.text} hover:${theme.bgAlt}`
              }`}
            >
              <CheckCircle className="w-4 h-4 inline mr-2" />
              Published
            </button>
          </div>
        </div>

        {/* Articles Grid/List */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onOpenArticle(article.id)}
                className={`${theme.bgCard} rounded-xl border ${theme.border} p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <FileText className={`w-10 h-10 ${theme.accent} group-hover:scale-110 transition-transform duration-300`} />
                  <span className={`text-xs ${theme.textMuted}`}>
                    {article.lastModified}
                  </span>
                </div>
                
                <h3 className={`text-lg font-bold ${theme.text} mb-2 line-clamp-2 group-hover:${theme.accent} transition-colors duration-300`}>
                  {article.title}
                </h3>
                
                <p className={`${theme.textMuted} text-sm mb-4 line-clamp-2`}>
                  {article.preview}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${theme.textMuted}`}>
                    {article.wordCount.toLocaleString()} words
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    article.status === 'draft' 
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                  }`}>
                    {article.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`text-center py-16 ${theme.bgCard} rounded-xl border ${theme.border}`}>
            <FileText className={`w-16 h-16 ${theme.textMuted} mx-auto mb-4`} />
            <h3 className={`text-xl font-bold ${theme.text} mb-2`}>
              No {activeTab} found
            </h3>
            <p className={`${theme.textMuted} mb-6`}>
              {searchQuery
                ? 'Try adjusting your search query'
                : `You don't have any ${activeTab} yet`}
            </p>
            {!searchQuery && (
              <Button onClick={onCreateNew} variant="primary" size="md">
                <Plus className="w-5 h-5 mr-2" />
                Create Your First Research
              </Button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
