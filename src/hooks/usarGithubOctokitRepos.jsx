import { useEffect, useState } from 'react'
import { Octokit } from '@octokit/rest'

function usarGithubOctokitRepos(username, token) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const octokit = new Octokit({
      auth: import.meta.env.VITE_GITHUB_TOKEN,
    });

    const fetchRepos = async () => {
      try {
        const response = await octokit.repos.listForUser({
          username: username,
          per_page: 100 // Número máximo de repositórios por página
        });

        let repos = response.data;

        repos = repos.filter(repo =>
          repo.name !== 'felipednl'
          && repo.name !== 'treina-code-git'
          && repo.name !== 'pcsx2'
          && repo.name !== 'representacao-kMeans'
        );

        setRepos(repos);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, token]);

  return { repos, loading, error };
}

export default usarGithubOctokitRepos