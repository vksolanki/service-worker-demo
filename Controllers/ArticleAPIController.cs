using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SWDemo.Models;

[Produces("application/json")]
[Route("api/[controller]")]
public class ArticleController : ControllerBase
{
    private readonly NoteDBContext context;

    public ArticleController(NoteDBContext _context)
    {
        context = _context;
    }

    [HttpGet("getall")]
    public async Task<List<Article>> GetAllAsync()
    {
        var list = await context.Articles.ToListAsync();
        Console.Write(list.Count);
        return list;
    }

    [HttpPost("add")]
    public async Task<Article> Add([FromBody] Article _Data)
    {
        Article ArticleInDB = null;
        if (_Data.Id != null)
        {
            ArticleInDB = context.Articles.Where(x => x.Id == _Data.Id).FirstOrDefault();
        }
        else
            _Data.Id = Guid.NewGuid();
        if (ArticleInDB != null)
        {
            ArticleInDB.Title = _Data.Title;
            ArticleInDB.Desc = _Data.Desc;
        }
        else
        {
            await context.Articles.AddAsync(_Data);
            ArticleInDB = _Data;
        }
        context.SaveChanges();
        return ArticleInDB;
    }
}