import { Aluno } from '../../teachingassistantangular/ta-gui/src/app/aluno';

export class CadastroDeAlunos {
  alunos: Aluno[] = [];

  criar(aluno: Aluno): Aluno {
    var result = null;
    if (this.cpfNaoCadastrado(aluno.cpf) && this.gitNaoCadastrado(aluno.github)) {
      result = new Aluno();
      result.copyFrom(aluno);
      this.alunos.push(result);
    }
    return result;
  }

  remover(aluno: Aluno): void{
    
  }

  cpfNaoCadastrado(cpf: string): boolean {
     return !this.alunos.find(a => a.cpf == cpf);
  }

  gitNaoCadastrado(github: string): boolean {
     return !this.alunos.find(a => a.github == github);
  }

  atualizar(aluno: Aluno): Aluno {
    var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
    if (result) result.copyFrom(aluno);
    return result;
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }
}
