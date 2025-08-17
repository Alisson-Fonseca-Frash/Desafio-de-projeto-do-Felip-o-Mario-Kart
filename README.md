
# DIO | Git e Github

Repositório para armazenar resumos sobre Git e Github do curso versionamento de código com Git e Github da [frash dev](frash-dev.com)

## 📒📋Documentação
  - [Documentação Git](https://git-scm.com/doc)
  - [Documentação Github](https://docs.github.com/)


  
```
git init adiciona raiz no diretório (main) e para remover a raiz, usa-se o comando:  rm -rf .git 
git add . (para criar um novo commit)
git log (para ver os commit's ativos e alterados) 
mkdir usa-se para criar um novo diretório
```
Exemplos de comandos acima:

exemplo de remover git init [Clique aqui](https://drive.google.com/file/d/19YkOPY9XEUErLSzX7UwqvqcuU0TfJLPD/view?usp=sharing)

## 🔍 Referências

- [Digital Innovation One](https://dio.me).


## 📚 Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?

## 💻 Resumos das aulas

  |Aulas | Resumos |
  |------|---------|
  | Salvando Alterações no Repositório Local | _".gitkeep" para pastas vazias serem exibidas no git. E ".gitignore" para ignorar um diretório ou pasta._ |
| Desfazendo alterações no repositório local | _O comando "rm -rf .git" serve para apagar um "git init" que foi aplicado a algum repositório. "git restore" usado para restaurar alterações indevidas. "git commit --amend -m"Texto"." para trocar a msg do commit. Ou o código "git commit --ammend" para abrir o editor de commit. Que para escrever aperta a tecla "i", e para sair aperta a tecla "esc" depois dois pontos ":" para escrever "wq" e dar enter. Já para dar um reset no commit, usa-se "git reset". Temos três opções: soft,mixed ou hard_.
| | Para "soft", Copia o codigo Commit [(Exemplo)](https://drive.google.com/file/d/1WTIC8Mrga2nsA3I_0rAIC6r01FdY3hGI/view?usp=sharing), e comando: git reset --soft (cola o codigo Commit).|
|| Para "mixed", Copia o código Commit [(Exemplo (Porém troca a opção "soft" para "mixed"))](https://drive.google.com/file/d/1WTIC8Mrga2nsA3I_0rAIC6r01FdY3hGI/view?usp=sharing), e comando: git reset --mixed (cola o código Commit).|
|| Para "hard", Copia o código Commit [(Exemplo (Porém troca a opção "soft" para "hard"))](https://drive.google.com/file/d/1WTIC8Mrga2nsA3I_0rAIC6r01FdY3hGI/view?usp=sharing), e comando: git reset --hard (cola o código Commit).


## **Relacionados a git reset**

## Sobre **_git reset_**

O comando `git reset` é usado para redefinir o estado do repositório Git para um commit anterior. Existem três modos principais de `git reset`: `--soft`, `--mixed` e `--hard`. Aqui estão as diferenças entre eles:

1. **`git reset --soft**:`
   - **HEAD**: Move o ponteiro HEAD para o commit especificado.
   - **Índice (staging area)**: Não é alterado.
   - **Diretório de trabalho**: Não é alterado.
   - **Uso**: As mudanças permanecem no índice, prontas para serem commitadas novamente.
   
2. **`git reset --mixed`** (padrão):
   - **HEAD**: Move o ponteiro HEAD para o commit especificado.
   - **Índice (staging area)**: É redefinido para coincidir com o commit especificado.
   - **Diretório de trabalho**: Não é alterado.
   - **Uso**: As mudanças são removidas do índice, mas permanecem no diretório de trabalho, permitindo que você as revise ou modifique antes de adicionar novamente ao índice.

3. **`git reset --hard`**:
   - **HEAD**: Move o ponteiro HEAD para o commit especificado.
   - **Índice (staging area)**: É redefinido para coincidir com o commit especificado.
   - **Diretório de trabalho**: É redefinido para coincidir com o commit especificado.
   - **Uso**: Todas as mudanças no índice e no diretório de trabalho são descartadas, retornando o repositório ao estado do commit especificado¹².


         Esses comandos são poderosos e devem ser usados com cuidado, especialmente o `--hard`, pois ele pode resultar na perda de mudanças não commitadas.


Fontes: 19/08/2024

¹ [Git - git-reset Documentation.](https://git-scm.com/docs/git-reset)

² [Git Reset | Hard, Soft & Mixed | Learn Git - GitKraken.](https://www.gitkraken.com/learn/git/git-reset)

[(1) Git - git-reset Documentation.](https://git-scm.com/docs/git-reset)

[(2) Git Reset | Hard, Soft & Mixed | Learn Git - GitKraken. ](https://www.gitkraken.com/learn/git/git-reset)

[(3) What’s The Difference Between git reset –mixed, –soft, and –hard?. ](https://bing.com/search?q=git+reset+soft+mixed+hard)
[(4) 程序员 - 掌握 Git Reset 三大模式：Soft、Mixed 和 Hard 的实战指南 - 个人文章 - SegmentFault 思否. ](https://segmentfault.com/a/1190000044719020)

[(5) What’s The Difference Between git reset –mixed, –soft, and –hard? ](https://www.geeksforgeeks.org/whats-the-difference-between-git-reset-mixed-soft-and-hard/)
## **Enviando e Baixando alterações com o Repositório Remoto**

```
git add . (Serve para adicionar tudo do diretório)
git push  é responsável por enviar alterações do Repositório local para o Repositório Remoto.
(Código: git push -u (sendo que o -u é uma abreviação pra --set -upstream. Ele configura o branch remoto como o upstream para o branch local, facilitando futuras operações de push e pull sem a necessidade de especificar o branch remoto novamente.))

```

